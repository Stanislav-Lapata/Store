class MainController < ApplicationController
  def index
  end

  def all_products
    render templates: 'all_products', layout: false
  end

  def show_product
    render templates: 'product', layout: false
  end

  def new_product
    render templates: 'new_product', layout: false
  end
end
