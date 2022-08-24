package model

import (
	validation "github.com/go-ozzo/ozzo-validation/v4"
	"github.com/go-ozzo/ozzo-validation/v4/is"
	_ "github.com/go-ozzo/ozzo-validation/v4/is"
	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type (
	StaffPayload struct {
		Name       string             `bson:"name" json:"name" form:"name" `
		Email      string             `bson:"email" json:"email" form:"email"`
		Password   string             `bson:"password" json:"password" form:"password"`
		Active     bool               `bson:"active" json:"active"  form:"active" `
		Salary     float64            `bson:"salary" json:"salary" form:"salary"`
		Department primitive.ObjectID `bson:"departmentId" json:"department" form:"department"`
	}

	Staff struct {
		ID primitive.ObjectID `bson:"_id" param:"id"`
		*StaffPayload
	}

	StaffQuery struct {
		Limit      int64              `query:"limit"`
		Page       int64              `query:"page"`
		Keyword    string             `query:"keyword"`
		Department primitive.ObjectID `query:"department"`
	}

	StaffStatusPayload struct {
		ID     primitive.ObjectID `bson:"_id" param:"id" query:"id"`
		Active bool               `bson:"active" form:"active" json:"active"`
	}
)

func (s *StaffStatusPayload) BindAndValidateStatusPayload(c echo.Context) error {
	if err := c.Bind(s); err != nil {
		return err
	}
	return validation.ValidateStruct(s,
		validation.Field(s.ID, validation.Required, is.MongoID),
		validation.Field(s.ID, validation.Required),
	)
}

func (s *StaffPayload) BindAndValidatePayload(c echo.Context) error {
	if err := c.Bind(s); err != nil {
		return err
	}
	return validation.ValidateStruct(s,
		validation.Field(s.Name, validation.Required),
		validation.Field(s.Email, validation.Required, is.Email),
		validation.Field(s.Salary, validation.Required, is.Float),
		validation.Field(s.Active, validation.Required),
		validation.Field(s.Password, validation.Required),
	)
}

func (s *StaffQuery) BindAndValidateQuery(c echo.Context) error {

	if err := c.Bind(s); err != nil {
		return err
	}
	return validation.ValidateStruct(s,
		validation.Field(s.Keyword, validation.Required),
		validation.Field(s.Limit, validation.Required, is.Int),
		validation.Field(s.Page, validation.Required, is.Int),
		validation.Field(s.Department, is.MongoID),
	)
}
