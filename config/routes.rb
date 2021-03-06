Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :stocks, only: [:index]
    get '/stocks/:ticker', to: 'stocks#show'
    resources :transactions, only: [:index, :create]
    resources :deposits, only: [:index]
    
  end

end



