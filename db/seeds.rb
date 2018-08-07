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
    username: Faker::Internet.unique.username,
    free_email: Faker::Internet.unique.free_email, 
    image: Faker::Avatar.unique.image
)
10.times do 
    Store.create!(
    name: Faker::Restaurant.unique.name,
    description: Faker::Restaurant.description,
)
end
end

puts "Seed finished"
puts "#{User.count} users created"
puts "#{Store.count} stores created"
