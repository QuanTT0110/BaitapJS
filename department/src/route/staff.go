package route

import (
	"department/src/controller"
	"github.com/labstack/echo/v4"
)

func NewStaffRouter(e *echo.Echo) {

	r := e.Group("/staff")

	r.POST("/", controller.CreateStaff)
	r.GET("/", controller.GetStaffs)
}
