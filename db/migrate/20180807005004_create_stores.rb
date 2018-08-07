class CreateStores < ActiveRecord::Migration[5.2]
  has_many :posts
  has_many :users, through: :posts
  
  def change
    create_table :stores do |t|
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
