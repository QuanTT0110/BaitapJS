package controller

import (
	"department/src/constant"
	"department/src/model"
	"department/src/service"
	"fmt"
	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func CreateDepartment(c echo.Context) error {
	var payload, ok = c.Get("payload").(model.DepartmentPayload)
	if !ok {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	var _, err = service.CreateDepartemnt(payload)
	if err != nil {
		return c.JSON(400, constant.ALREADY_EXIST)
	}
	return c.JSON(200, constant.CREATE_SUCCESS)
}

func UpdateDepartment(c echo.Context) error {
	var payload, ok = c.Get("payload").(model.DepartmentPayload)
	var ID, _ = primitive.ObjectIDFromHex(c.Param("id"))

	if !ok {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	var _, err = service.UpdateDepartment(ID, payload)
	if err != nil {
		if fmt.Sprint(err) == constant.ALREADY_EXIST {
			return c.JSON(400, constant.ALREADY_EXIST)
		}
		return c.JSON(400, constant.UPDATE_ERROR)
	}
	return c.JSON(200, constant.UPDATE_SUCCESS)
}

func GetDepartment(c echo.Context) error {
	var ID, _ = primitive.ObjectIDFromHex(c.Param("id"))
	var rs, err = service.GetDepartment(ID)
	if err != nil {
		return c.JSON(400, constant.NOT_FOUND)
	}
	return c.JSON(200, rs)
}

func GetDepartments(c echo.Context) error {
	var query, ok = c.Get("query").(model.DepartmentQuery)
	if !ok {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	var rs, err = service.GetDepartments(&query)
	if err != nil {
		return c.JSON(400, constant.NOT_FOUND)
	}
	return c.JSON(200, rs)
}
