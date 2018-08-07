class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :free_email
      t.string :image

      t.timestamps
    end
  end
end