json.(@product, :id, :name, :description, :price)
json.images @product.images do |image|
  json.id image.id
  json.name image.name.url
end
