module Api
  module V1
    class ProductsController < ApplicationController
      def index
        render json: Product.all.includes(:images), include: :images
      end

      def show
        render json: Product.find(params[:id]), include: :images
      end

      def create
        product = Product.new(product_params)
        product.category_id = params[:category_id]
        if product.save
          render json: product
        else
          errors = {}
          product.errors.each do |key|
            errors[key] = product.errors[key].join(", ")
          end
          render json: {errors: errors} , status: 422
        end
      end

      def update
        product = Product.find(params[:id])
        if product.update(product_params)
          render json: product
        else
          errors = {}
          product.errors.each do |key|
            errors[key] = product.errors[key].join(", ")
          end
          render json: {errors: errors} , status: 422
        end
      end

      def destroy
        render json: Product.destroy(params[:id])
      end

      private

      def product_params
        params.require(:product).permit(:name, :description, :image, :price)
      end
    end
  end
end
