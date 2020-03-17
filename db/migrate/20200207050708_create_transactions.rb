class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.string :ticker, null: false
      t.float :price, null: false
      t.integer :shares, null: false
      t.string :order_type, null: false

      t.timestamps
    end

  end
end
