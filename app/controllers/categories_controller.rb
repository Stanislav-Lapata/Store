class CategoriesController < ApplicationController
  def index
    render json: Category.all.includes(:products), include: :products
  end

  def show
    render json: Category.find(params[:id]).as_json(include: {products: {include: :images}})
  end

  def create
    category = Category.new(category_params)
    if category.save
      render json: category
    else
      errors = {}
      category.errors.each do |key|
        errors[key] = category.errors[key].join(", ")
      end
      render json: {errors: errors} , status: 422
    end
  end

  def update
    category = Category.find(params[:id])
    if category.update(category_params)
      render json: category
    else
      errors = {}
      category.errors.each do |key|
        errors[key] = category.errors[key].join(", ")
      end
      render json: {errors: errors} , status: 422
    end
  end

  def destroy
    render json: Category.destroy(params[:id])
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end
end
