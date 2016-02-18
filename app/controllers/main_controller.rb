class MainController < ApplicationController
  def index
  end

  # products
  def all_products
    render templates: 'all_products', layout: false
  end

  def show_product
    render templates: 'show_product', layout: false
  end

  def new_product
    render templates: 'new_product', layout: false
  end

  # categories
  def all_categories
    render templates: 'all_categories', layout: false
  end

  def show_category
    render templates: 'show_category', layout: false
  end

  def new_category
    render templates: 'new_category', layout: false
  end

  # devise
  def registration
    render templates: 'registration', layout: false
  end

  def sign_in
    render templates: 'sign_in', layout: false
  end
end
