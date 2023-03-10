class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  has_many :projects, dependent: :destroy
  accepts_nested_attributes_for :projects, limit: 10

  validates :terms, :acceptance => true
  validates :email_consent, :acceptance => true

  validates :password, :confirmation => true
  validates :password_confirmation, :presence => true

  validates :email, :length => {:maximum => 40, :too_long => '%{count} characters is the maximum allowed'
  }

  validates :password, :length => { :in => 6..30 }

  validates :phone_number, :length => {:is => 10}
  
  validates :email, :confirmation => true

  validates :email, :first_name, :last_name, :password,  :presence => true

  # after_create :welcome_email

  def welcome_email
    UserMailer.welcome_email(self).deliver
  end

  def full_name 
    "#{first_name} #{last_name}"
  end
  
end
