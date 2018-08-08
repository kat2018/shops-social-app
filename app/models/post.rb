class Post < ApplicationRecord
      belongs_to :user
      belongs_to :store
      
      accepts_nested_attributes_for :user, :store
end
