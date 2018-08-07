class CreateUsers < ActiveRecord::Migration[5.2]
  has_many :posts
  has_many :stores, though: :posts
  
  def change
    create_table :users do |t|
      t.string :username
      t.string :free_email
      t.string :image

      t.timestamps
    end
  end
end
