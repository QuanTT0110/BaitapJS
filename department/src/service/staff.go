package service

import (
	"department/src/constant"
	"department/src/dao"
	"department/src/model"
	"errors"
	"reflect"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func CreateStaff(payload model.StaffPayload) (model.Message, error) {
	if isExistEmailStaff(payload.Email) {
		return model.Message{}, errors.New(constant.ALREADY_EXIST)
	}
	var _, err = dao.CreateStaff(payload)
	if err != nil {
		return model.Message{}, err
	}
	return model.Message{constant.CREATE_SUCCESS}, nil
}

func UpdateStaff(id primitive.ObjectID, payload model.StaffPayload) (model.Message, error) {
	if isExistEmailStaff(payload.Email) {
		return model.Message{}, errors.New(constant.ALREADY_EXIST)
	}
	if isExistStaff(id) {
		var _, err = dao.UpdateStaff(id, payload)
		if err != nil {
			return model.Message{}, err
		}
		return model.Message{constant.UPDATE_SUCCESS}, nil
	}
	return model.Message{}, errors.New(constant.NOT_FOUND)
}

func ChangeActiveStaff(payload model.StaffStatusPayload) (model.Message, error) {
	var _, err = dao.ChangeStaffActive(payload)
	if err != nil {
		return model.Message{}, err
	}
	return model.Message{constant.UPDATE_SUCCESS}, nil
}

func GetStaff(id primitive.ObjectID) (model.StaffResponse, error) {

	var rs, err = dao.GetStaff(id)

	if err != nil {
		return model.StaffResponse{}, err
	}

	if reflect.DeepEqual(rs, model.Staff{}) {
		return model.StaffResponse{}, errors.New(constant.NOT_FOUND)
	}

	var department, _ = GetDepartment(rs.Department)

	return model.StaffResponse{
		ID:         rs.ID.Hex(),
		Name:       rs.Name,
		Email:      rs.Email,
		Active:     rs.Active,
		Salary:     rs.Salary,
		Department: department,
	}, nil
}

func GetStaffs(query *model.StaffQuery) ([]model.StaffResponse, error) {

	if query.Limit < 1 {
		query.Limit = 20
	}
	if query.Page < 1 {
		query.Page = 1
	}

	var rs, err = dao.GetStaffs(*query)
	if err != nil {
		return nil, err
	}

	var staffs = []model.StaffResponse{}
	for _, value := range rs {
		var department, _ = GetDepartment(value.Department)

		staffs = append(staffs, model.StaffResponse{
			ID:         value.ID.Hex(),
			Name:       value.Name,
			Email:      value.Email,
			Active:     value.Active,
			Salary:     value.Salary,
			Department: department,
		})
	}
	return staffs, nil
}

func isExistStaff(id primitive.ObjectID) bool {
	var rs, err = dao.GetStaff(id)
	if err != nil || reflect.DeepEqual(rs, model.Staff{}) {
		return false
	}
	return true
}

func isExistEmailStaff(email string) bool {
	var rs, err = dao.GetStaffByEmail(email)
	if err != nil || reflect.DeepEqual(rs, model.Staff{}) {
		return false
	}
	return true
}
