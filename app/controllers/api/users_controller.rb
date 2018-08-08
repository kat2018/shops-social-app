class Api::UsersController < ApplicationController
  def index
    @user = User.all
    render json: @user
  end

  def show
  end

  def create
  end

  def update
  end

  def delete
  end
end
