package main

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"net/http"
)

type User struct {
	Name  string `json:"name" xml:"name" form:"name"`
	Email string `json:"email" xml:"email" form:"email"`
	Age   int    `json:"age" xml:"age" form:"age"'`
}

func main() {
	e := echo.New()
	e.Use(echo.MiddlewareFunc(echo.Logger()))
	e.GET("/users", show)
	e.GET("/user/:id", getUser)
	e.POST("/user", save)
	//e.PUT("/user/:id",updateUser)
	//e.DELETE("/user/id",deleteUser)
	e.Logger.Fatal(e.Start(":5000"))
}

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
	var user = new(User)
	if err := c.Bind(user); err != nil {
		fmt.Println(err)
		return err
	}
	return c.JSON(http.StatusOK, user)
}
