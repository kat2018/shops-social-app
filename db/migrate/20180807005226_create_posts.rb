class CreatePosts < ActiveRecord::Migration[5.2]
  belongs_to :user
  belongs_to :store
  
  def change
    create_table :posts do |t|
      t.string :review
      t.string :image

      t.timestamps
    end
  end
end
