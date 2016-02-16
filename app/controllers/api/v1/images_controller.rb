module Api
  module V1
    class ImagesController < ApplicationController
      def create
        @image = Image.new(image_params)
        if @image.save
          @image
        else
          errors = {}
          @image.errors.each do |key|
            errors[key] = @image.errors[key].join(", ")
          end
          render json: {errors: errors} , status: 409
        end
      end

      def destroy
        image = Image.find(params[:id])
        product = image.product
        if product.images.length > 2
          Image.destroy(params[:id])
        else
          error = "Pictures cannot be less than two"
          render json: {error: error}, status: 422
        end
      end

      private

      def image_params
        params.require(:image).permit(:name, :product_id)
      end
    end
  end
end
