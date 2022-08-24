package service

import (
	"department/src/constant"
	"department/src/dao"
	"department/src/model"
	"errors"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"reflect"
)

func CreateDepartemnt(payload model.DepartmentPayload) (interface{}, error) {
	if isExistNameDepartment(payload.Name) {
		return nil, errors.New(constant.ALREADY_EXIST)
	}
	var rs, err = dao.CreateDepartment(payload)
	if err != nil {
		return nil, err
	}
	return rs, nil

}

func UpdateDepartment(id primitive.ObjectID, payload model.DepartmentPayload) (interface{}, error) {
	if isExistNameDepartment(payload.Name) {
		return nil, errors.New(constant.ALREADY_EXIST)
	}
	if isExistDepartment(id) {
		var rs, err = dao.UpdateDepartment(id, payload)
		if err != nil {
			return nil, err
		}
		return rs, nil
	}
	return nil, errors.New(constant.NOT_FOUND)

}

func GetDepartment(id primitive.ObjectID) (interface{}, error) {
	var rs, err = dao.GetDepartmentById(id)
	if err != nil || reflect.DeepEqual(rs, model.Department{}) {
		return nil, errors.New(constant.NOT_FOUND)
	}
	return rs, nil
}

func GetDepartments(query *model.DepartmentQuery) (interface{}, error) {
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
	return rs, nil
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
