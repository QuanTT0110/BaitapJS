package route

import (
	"department/src/route/validate"
	"github.com/labstack/echo/v4"
)

func New(e *echo.Echo) {

	e.Validator = validate.New()

	NewStaffRouter(e)

}
