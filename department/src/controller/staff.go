package controller

import (
	"department/src/constant"
	"department/src/model"
	"department/src/service"
	"fmt"
	"github.com/labstack/echo/v4"
	"strconv"
)

func CreateStaff(c echo.Context) error {
	var staff = new(model.StaffPayload)

	if err := staff.BindAndValidatePayload(c); err != nil {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	var _, err = service.CreateStaff(*staff)
	if err != nil {
		return c.JSON(400, constant.ALREADY_EXIST)
	}
	return c.JSON(200, constant.CREATE_SUCCESS)

}

func UpdateStaff(c echo.Context) error {
	var staff = new(model.StaffPayload)
	var paramId = new(model.MongoID)
	if err := staff.BindAndValidatePayload(c); err != nil {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	if err := paramId.BindAndValidateParamID(c); err != nil {
		return c.JSON(400, constant.BAD_REQUEST)
	}
	var _, err = service.UpdateStaff(paramId.ID, *staff)
	if err != nil {
		if fmt.Sprint(err) == constant.ALREADY_EXIST {
			return c.JSON(400, constant.ALREADY_EXIST)
		}
		return c.JSON(400, constant.UPDATE_ERROR)
	}
	
}

func GetStaffs(c echo.Context) error {
	var query = model.StaffQuery{}
	query.Limit, _ = strconv.ParseInt(c.QueryParam("limit"), 20, 64)
	query.Page, _ = strconv.ParseInt(c.QueryParam("page"), 20, 64)
	query.Keyword = c.QueryParam("keyword")
	var rs, err = service.GetStaffs(query)
	if err != nil {
		return c.JSON(400, constant.NOT_FOUND)
	}
	return c.JSON(200, rs)
}
