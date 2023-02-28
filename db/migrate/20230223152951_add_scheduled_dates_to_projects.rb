class AddScheduledDatesToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :scheduled_start_date, :date
    add_column :projects, :scheduled_completion_date, :date
    add_column :projects, :start_date, :date
    add_column :projects, :completion_date, :date
  end
end
