package service

import (
	"department/src/constant"
	"department/src/dao"
	"department/src/model"
	"errors"
	"reflect"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func CreateDepartemnt(payload model.DepartmentPayload) (model.Message, error) {
	if isExistNameDepartment(payload.Name) {
		return model.Message{}, errors.New(constant.ALREADY_EXIST)
	}
	var _, err = dao.CreateDepartment(payload)
	if err != nil {
		return model.Message{}, err
	}
	return model.Message{constant.CREATE_SUCCESS}, nil

}

func UpdateDepartment(id primitive.ObjectID, payload model.DepartmentPayload) (model.Message, error) {
	if isExistNameDepartment(payload.Name) {
		return model.Message{}, errors.New(constant.ALREADY_EXIST)
	}
	if isExistDepartment(id) {
		var _, err = dao.UpdateDepartment(id, payload)
		if err != nil {
			return model.Message{}, err
		}
		return model.Message{constant.UPDATE_SUCCESS}, nil
	}
	return model.Message{}, errors.New(constant.NOT_FOUND)

}

func GetDepartment(id primitive.ObjectID) (model.DepartmentResponse, error) {
	var rs, err = dao.GetDepartmentById(id)
	if err != nil {
		return model.DepartmentResponse{}, errors.New(constant.NOT_FOUND)
	}
	return model.DepartmentResponse{
		ID:   rs.ID.Hex(),
		Name: rs.Name,
	}, nil
}

func GetDepartments(query *model.DepartmentQuery) ([]model.DepartmentResponse, error) {
	if query.Limit < 1 {
		query.Limit = 20
	}
	if query.Page < 1 {
		query.Page = 1
	}
	var rs, err = dao.GetDepartments(*query)
	if err != nil {
		return nil, err
	}
	var departments = []model.DepartmentResponse{}
	for _, value := range rs {
		departments = append(departments, model.DepartmentResponse{
			ID:   value.ID.Hex(),
			Name: value.Name,
		})
	}
	return departments, nil
}

func isExistNameDepartment(name string) bool {
	var rs, err = dao.GetDepartmentByName(name)
	if err != nil {
		return false
	}
	if reflect.DeepEqual(rs, model.Department{}) {
		return false
	}
	return true
}

func isExistDepartment(id primitive.ObjectID) bool {
	var rs, err = dao.GetDepartmentById(id)
	if err != nil {
		return false
	}
	if reflect.DeepEqual(rs, model.Department{}) {
		return false
	}
	return true
}
