class Post < ApplicationRecord
      belongs_to :user
      belongs_to :store

      validates :store, :presence => true
      
      accepts_nested_attributes_for :user, :store
end
