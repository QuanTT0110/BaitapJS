package controller

import (
	"department/src/constant"
	"department/src/model"
	"github.com/labstack/echo/v4"
)

func CreateDepartment(c echo.Context) error {
	var department = new(model.DepartmentPayload)
	var err = c.Bind(department)
	if err != nil {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	err = department.ValidatePayload()
	if err != nil {
		return c.JSON(400, constant.BAD_REQUEST)
	}

}
