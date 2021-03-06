Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root 'main#index'
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
        resources :categories, except: [:new, :edit] do
          resources :products, except: [:index, :new, :edit]
        end
        resources :images, only: [:create, :destroy]
    end
  end
  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end

  get 'all_categories' => 'main#all_categories'
  get 'new_category' => 'main#new_category'
  get 'show_category' => 'main#show_category'

  get 'all_products' => 'main#all_products'
  get 'show_product' => 'main#show_product'
  get 'new_product' => 'main#new_product'

  get 'registrations' => 'main#registration'
  get 'sign_in' => 'main#sign_in'

  get '*product', to: 'main#index'
  get '*category', to: 'main#index'


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable
end
