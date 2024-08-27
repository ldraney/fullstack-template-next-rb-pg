class Api::V1::ProductsController < ApplicationController
  def index
    render json: Product.all
  end

  def show
    product = Product.find_by(id: params[:id])
    if product
      render json: product
    else
      render json: { error: 'Product not found' }, status: :not_found
    end
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product, status: :created
    else
      render json: product.errors, status: :unprocessable_entity
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :price)
  end
end
