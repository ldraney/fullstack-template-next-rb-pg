class ApplicationController < ActionController::API
  def hello
    render json: { message: 'Hello from Rails!' }
  end
  def index
    @products = Product.all
  end
end
