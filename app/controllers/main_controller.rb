class MainController < ApplicationController
  def index
  end

  def all_products
    render templates: 'all_products', layout: false
  end

  def show_product
    render templates: 'show_product', layout: false
  end

  def new_product
    render templates: 'new_product', layout: false
  end

  def all_categories
    render templates: 'all_categories', layout: false
  end

  def show_category
    render templates: 'show_category', layout: false
  end

  def new_category
    render templates: 'new_category', layout: false
  end
end
