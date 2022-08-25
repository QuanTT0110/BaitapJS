package controller

import (
	"department/src/constant"
	"department/src/model"
	"department/src/service"
	"fmt"
	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func CreateStaff(c echo.Context) error {
	var payload, ok = c.Get("payload").(model.StaffPayload)
	fmt.Println("controler....", payload)
	if !ok {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	var _, err = service.CreateStaff(payload)
	if err != nil {
		return c.JSON(400, constant.ALREADY_EXIST)
	}
	return c.JSON(200, constant.CREATE_SUCCESS)

}

func UpdateStaff(c echo.Context) error {
	var payload, ok = c.Get("payload").(model.StaffPayload)
	var ID, _ = primitive.ObjectIDFromHex(c.Param("id"))

	if !ok {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	var _, err = service.UpdateStaff(ID, payload)
	if err != nil {
		if fmt.Sprint(err) == constant.ALREADY_EXIST {
			return c.JSON(400, constant.ALREADY_EXIST)
		}
		return c.JSON(400, constant.UPDATE_ERROR)
	}
	return c.JSON(200, constant.UPDATE_SUCCESS)
}

func GetStaffs(c echo.Context) error {
	var query, ok = c.Get("query").(model.StaffQuery)
	if !ok {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	var rs, err = service.GetStaffs(&query)
	if err != nil {
		return c.JSON(400, constant.NOT_FOUND)
	}
	return c.JSON(200, rs)
}

func GetStaff(c echo.Context) error {
	var ID, _ = primitive.ObjectIDFromHex(c.Param("id"))
	var rs, err = service.GetStaff(ID)
	if err != nil {
		return c.JSON(400, constant.NOT_FOUND)
	}
	return c.JSON(200, rs)
}
