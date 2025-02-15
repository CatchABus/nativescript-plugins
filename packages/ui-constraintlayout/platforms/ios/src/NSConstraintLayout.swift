import UIKit

@objc(NSConstraintLayout)
class NSConstraintLayout: UIView {

  private var layoutChangeListener: ((CGRect) -> Void)?;

  override func layoutSubviews() {
    super.layoutSubviews();

    self.layoutChangeListener?(self.frame);
  }

  @objc func setLayoutChangeListener(value: @escaping ((CGRect) -> Void)) {
    self.layoutChangeListener = value;
  }
}
