package validate

import (
	"department/src/constant"
	"department/src/model"

	"github.com/labstack/echo/v4"
)

func StaffPayload(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		var payload = new(model.StaffPayload)
		var err = payload.BindAndValidatePayload(c)
		if err != nil {
			return c.JSON(400, constant.INVALID_INPUT)
		}
		c.Set("payload", payload)
		return next(c)
	}
}

func StaffQuery(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		var query = new(model.StaffQuery)
		var err = query.BindAndValidateQuery(c)
		if err != nil {
			return c.JSON(400, constant.INVALID_INPUT)
		}
		c.Set("query", query)
		return next(c)
	}
}
