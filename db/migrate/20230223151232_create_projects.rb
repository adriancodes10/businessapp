class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :street_name
      t.string :city
      t.string :state
      t.integer :height, default: 8
      t.integer :length, default: 100
      t.integer :width, default: 12
      t.integer :zip_code, default: 71901
      t.date :desired_start_date
      t.date :desired_completion_date

      t.timestamps null:false
    end
  end
end
