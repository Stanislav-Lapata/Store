class ImagesController < ApplicationController
  def create
    image = Image.new(image_params)
    if image.save
      render json: image
    else
      errors = {}
      image.errors.each do |key|
        errors[key] = image.errors[key].join(", ")
      end
      render json: {errors: errors} , status: 409
    end
  end

  def destroy
    binding.pry
    render json: Image.destroy(params[:id])
  end

  private

  def image_params
    params.require(:image).permit(:name, :product_id)
  end
end
