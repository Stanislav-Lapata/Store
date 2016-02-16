# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
3.times {|i| Category.create(name: "Category#{i}")}
10.times {|i| Product.create(name: "Product#{i+1}", price: i**2, description: "Description#{i+1}")}



