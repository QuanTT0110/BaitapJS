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
	if !ok {
		return c.JSON(400, model.Message{constant.BAD_REQUEST})
	}
	var rs, err = service.CreateStaff(payload)
	if err != nil {
		return c.JSON(400, err.Error())
	}
	return c.JSON(200, rs)

}

func UpdateStaff(c echo.Context) error {
	var payload, ok = c.Get("payload").(model.StaffPayload)
	var ID, _ = primitive.ObjectIDFromHex(c.Param("id"))
	fmt.Println(payload, ID)
	if !ok {
		return c.JSON(400, model.Message{constant.BAD_REQUEST})
	}

	var rs, err = service.UpdateStaff(ID, payload)
	if err != nil {
		return c.JSON(400, err.Error())
	}
	return c.JSON(200, rs)
}

func GetStaffs(c echo.Context) error {
	var query, ok = c.Get("query").(model.StaffQuery)
	if !ok {
		return c.JSON(400, model.Message{constant.BAD_REQUEST})
	}
	var rs, err = service.GetStaffs(&query)
	if err != nil {
		return c.JSON(400, err.Error())
	}
	return c.JSON(200, rs)
}

func GetStaff(c echo.Context) error {
	var ID, _ = primitive.ObjectIDFromHex(c.Param("id"))
	var rs, err = service.GetStaff(ID)
	if err != nil {
		return c.JSON(400, err.Error())
	}
	return c.JSON(200, rs)
}
