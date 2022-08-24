package service

import (
	"department/src/constant"
	"department/src/dao"
	"department/src/model"
	"errors"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"reflect"
)

func CreateStaff(payload model.StaffPayload) (interface{}, error) {
	if isExistEmailStaff(payload.Email) {
		return nil, errors.New(constant.ALREADY_EXIST)
	}
	var rs, err = dao.CreateStaff(payload)
	if err != nil {
		return nil, err
	}
	return rs, nil
}

func UpdateStaff(id primitive.ObjectID, payload model.StaffPayload) (interface{}, error) {
	if isExistEmailStaff(payload.Email) {
		return nil, errors.New(constant.ALREADY_EXIST)
	}
	if isExistStaff(id) {
		var rs, err = dao.UpdateStaff(id, payload)
		if err != nil {
			return nil, err
		}
		return rs, nil
	}
	return nil, errors.New(constant.NOT_FOUND)
}

func ChangeActiveStaff(payload model.StaffStatusPayload) (interface{}, error) {
	var rs, err = dao.ChangeStaffActive(payload)
	if err != nil {
		return nil, err
	}
	return rs, nil
}

func GetStaff(id primitive.ObjectID) (interface{}, error) {
	var rs, err = dao.GetStaff(id)
	if err != nil {
		return nil, err
	}
	if reflect.DeepEqual(rs, model.Staff{}) {
		return nil, errors.New(constant.NOT_FOUND)
	}
	return rs, nil
}

func GetStaffs(query *model.StaffQuery) (interface{}, error) {
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
	return rs, nil
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
