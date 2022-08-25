package validate

import (
	"department/src/constant"
	"department/src/model"
	"fmt"
	"github.com/labstack/echo/v4"
)

func DepartmentPayload(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		var payload = new(model.DepartmentPayload)
		var err = payload.BindAndValidatePayload(c)
		if err != nil {
			return c.JSON(400, constant.INVALID_INPUT)
		}
		c.Set("payload", *payload)
		return next(c)
	}
}

func DepartmentQuery(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		var query = new(model.DepartmentQuery)
		var err = query.BindAndValidateQuery(c)
		fmt.Println(err)
		if err != nil {
			return c.JSON(400, constant.INVALID_INPUT)
		}
		fmt.Println("pass validate")
		c.Set("query", *query)
		return next(c)
	}
}
