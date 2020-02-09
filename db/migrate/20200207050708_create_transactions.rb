class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :stock_id, null: false
      t.float :price, null: false
      t.integer :shares, null: false
      t.string :type, null: false
      t.datetime :transaction_date

      t.timestamps
    end

    add_index :transactions, [:user_id, :stock_id]
    add_index :transactions, :stock_id
  end
end
