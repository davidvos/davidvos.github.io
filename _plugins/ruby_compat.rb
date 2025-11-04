# Make Liquid 4.x work on Ruby >= 3.2: no-op untaint.
unless "".respond_to?(:untaint)
  class String
    def untaint = self
  end
end
