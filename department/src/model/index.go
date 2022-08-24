package model

import (
	validation "github.com/go-ozzo/ozzo-validation/v4"
	"github.com/go-ozzo/ozzo-validation/v4/is"
	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type (
	MongoID struct {
		ID primitive.ObjectID `param:"id"`
	}
)

func (s *MongoID) BindAndValidateParamID(c echo.Context) error {
	if err := c.Bind(s); err != nil {
		return err
	}
	return validation.Validate(s.ID, validation.Required, is.MongoID)
}
