package router

import (
	"github.com/labstack/echo"
	"net/http"
)

func getUser(c echo.Context) error {
	id := c.Param("id")
	return c.String(http.StatusOK, "id : "+id)
}
func show(c echo.Context) error {
	team := c.QueryParam("team")
	member := c.QueryParam("member")
	return c.String(http.StatusOK, "team "+team+", member: "+member)
}

func save(c echo.Context) error {
	name := c.FormValue("name")
	email := c.FormValue("email")
	return c.String(http.StatusOK, "name :"+name+", email;"+email)
}
