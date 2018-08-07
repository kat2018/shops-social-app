class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :review
      t.string :image
      t.belongs_to :user, index: true
      t.belongs_to :post, index: true

      t.timestamps null: false
    end
  end
end
