Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :create, :show]
    end
  end
end


# Rails.application.routes.draw do
# get "/products", to: "products#index"
# end
# #   namespace :api do
# #     namespace :v1 do
# #       resources :products, only: [:index]
# #     end
# #   end
# #
# #   root "products#index"
# #
# #   get "/products", to: "products#index"
# #
# #   # Add this line at the end for frontend routes
# #   get '*path', to: 'application#fallback_index_html', constraints: ->(request) { !request.xhr? && request.format.html? }
# # end
#
