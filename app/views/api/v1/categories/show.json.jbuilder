json.(@category, :id, :name)
json.products @category.products do |product|
  json.id product.id
  json.name product.name
  json.description product.description
  json.price product.price
  json.image product.images[0].name.thumb.url if product.images.any?
end
