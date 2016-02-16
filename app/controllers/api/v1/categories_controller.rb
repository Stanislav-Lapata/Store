module Api
  module V1
    class CategoriesController < ApplicationController
      def index
        @categories = Category.all
      end

      def show
        @category = Category.find(params[:id])
      end

      def create
        @category = Category.new(category_params)
        if @category.save
          @category
        else
          errors = {}
          @category.errors.each do |key|
            errors[key] = @category.errors[key].join(", ")
          end
          render json: {errors: errors} , status: 422
        end
      end

      def update
        @category = Category.find(params[:id])
        if @category.update(category_params)
          @category
        else
          errors = {}
          @category.errors.each do |key|
            errors[key] = @category.errors[key].join(", ")
          end
          render json: {errors: errors} , status: 422
        end
      end

      def destroy
        Category.destroy(params[:id])
      end

      private

      def category_params
        params.require(:category).permit(:name)
      end
    end
  end
end
