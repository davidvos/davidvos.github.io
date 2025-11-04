puts "[compat_untaint] loaded"
unless "".respond_to?(:untaint)
  class String
    def untaint = self
  end
end
