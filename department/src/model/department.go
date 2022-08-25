package model

import (
	validation "github.com/go-ozzo/ozzo-validation/v4"
	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type (
	DepartmentPayload struct {
		Name string `json:"name" form:"name" bson:"name"`
	}
	Department struct {
		ID   primitive.ObjectID `bson:"_id"`
		Name string             `json:"name" form:"name" bson:"name"`
	}
	DepartmentQuery struct {
		Limit   int64  `query:"limit"`
		Page    int64  `query:"page"`
		Keyword string `query:"keyword"`
	}
)

func (s *DepartmentPayload) BindAndValidatePayload(c echo.Context) error {
	if err := c.Bind(s); err != nil {
		return err
	}
	return validation.ValidateStruct(s,
		validation.Field(&s.Name, validation.Required),
	)
}
func (s *DepartmentQuery) BindAndValidateQuery(c echo.Context) error {
	if err := c.Bind(s); err != nil {
		return err
	}
	return validation.ValidateStruct(s,
		validation.Field(&s.Limit, validation.Required),
		validation.Field(&s.Page, validation.Required),
	)
}
