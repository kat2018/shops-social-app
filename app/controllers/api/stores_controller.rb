class Api::StoresController < ApplicationController
  def index
    @store = Store.all
    render json: @store
  end

  def show
    @store = Store.find(params[:id])
    render json: @store
  end

  def create
    @store = Store.create(store_params)
    render json: @store
  end

  def update
    @store = Store.find(params[:id])
    @store.update(store_params)
    render json: @store
  end

  def destroy
    @store = Store.find(params[:id]).destroy
    render status: :ok
  end

  private

  def store_params
    params.require(:store).permit(:name, :description)
  end
end
