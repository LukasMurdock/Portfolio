Rails.application.routes.draw do
  get 'gos_inst', to: 'gos#gos_inst'
  get 'gos', to: 'gos#gos'
  root 'home#index'
  get 'index', to: 'home#index'
  get 'resume', to: 'home#resume'
  get 'work', to: 'home#work'
  get 'my_life', to: 'home#my_life'
  get 'review', to: 'home#review'
end
