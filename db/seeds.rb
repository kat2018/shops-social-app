# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require_relative './user_data.rb'
require_relative './store_data.rb'

User.destroy_all
Store.destroy_all

10.times do 
    User.create!(
    user_name: Faker::Internet.unique.username,
    email: Faker::Internet.unique.free_email, 
    user_image: Faker::Avatar.unique.image
)
10.times do 
    Store.create!(
    store_name: Faker::Restaurant.unique.name,
    store_description: Faker::Restaurant.unique.description,
)
end
end

